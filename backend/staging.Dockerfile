# Use a minimal base image
FROM ruby:3.0.6-alpine as base

# Sort the arguments alphabetically
ARG BUILD_PACKAGES="build-base curl-dev g++ git icu-dev imagemagick libxml2-dev libxslt-dev make openssh python3"
ARG DEV_PACKAGES="mariadb-dev yaml-dev zlib-dev"
ARG RUBY_PACKAGES="tzdata"

ENV RAILS_ENV=staging\
    BUNDLE_FORCE_RUBY_PLATFORM=true \
    BUNDLE_PATH=/bundle \
    BUNDLE_BIN=/bundle/bin \
    BUNDLE_APP_CONFIG=/bundle/config\
    WORKDIR=/app
ENV PATH="${BUNDLE_BIN}:${PATH}"

# Combine the apk commands into one layer and clean up the cache
RUN apk update \
    && apk upgrade \
    && apk add --update --no-cache $BUILD_PACKAGES $DEV_PACKAGES $RUBY_PACKAGES \
    && gem install bundler -v 2.4.20 \
    && rm -rf /var/cache/apk/*

# Use a separate stage for installing dependencies
FROM base as dependencies

WORKDIR $WORKDIR

# Copy only the Gemfile and Gemfile.lock
COPY Gemfile .
COPY Gemfile.lock .

# Install the gems without development and test groups
RUN bundle install --without development test

# Use a final stage for copying the application code
FROM base as final

# Copy the environment variables and the bundle path from the previous stage
COPY --from=dependencies $WORKDIR $WORKDIR
COPY --from=dependencies $BUNDLE_PATH $BUNDLE_PATH

WORKDIR $WORKDIR

# Copy the rest of the application code
COPY . .

EXPOSE 3000

# docker build -f staging.dockerfile .
# docker run --env-file ../.env -p 3000:3000 f9bac1adbc67

CMD ["rails", "server", "-b", "0.0.0.0"]
