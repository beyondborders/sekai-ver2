FROM ruby:3.0.6-alpine

ARG RAILS_ROOT=/sekai
ARG BUILD_PACKAGES="build-base curl-dev libxml2-dev libxslt-dev git openssh"
ARG DEV_PACKAGES="mariadb-dev yaml-dev zlib-dev python3 make g++ icu-dev imagemagick"
ARG RUBY_PACKAGES="tzdata"

ENV RAILS_ENV=development\
    BUNDLE_FORCE_RUBY_PLATFORM=true

ENV BUNDLE_PATH=/bundle \
    BUNDLE_BIN=/bundle/bin \
    BUNDLE_APP_CONFIG=/bundle/config
ENV PATH="${BUNDLE_BIN}:${PATH}"

RUN apk update \
    && apk upgrade \
    && apk add --update --no-cache $BUILD_PACKAGES $DEV_PACKAGES $RUBY_PACKAGES


RUN gem install bundler -v 2.4.20


WORKDIR $RAILS_ROOT



