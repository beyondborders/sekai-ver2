require 'open_exchange_rates'
class CurrencyConverterService
  attr_reader :base_currency

  CACHE_EXPIRY = 1.day

  def initialize(base_currency)
    @base_currency = base_currency
    @api_client    = api_client
    @cache         = Rails.cache
  end

  def get_rate(target_currency)
    @cache.fetch("rate_#{base_currency}_#{target_currency}", expires_in: CACHE_EXPIRY) do
      puts "Getting the exchange rates..."
      @api_client.exchange_rate(from: base_currency, to: target_currency)
    end
  end

  def convert(amount, target_currency)
    rate = get_rate(target_currency)
    (amount * rate).round(2)  # Adjust decimal precision as needed
  end

  def api_client
    OpenExchangeRates::Rates.new
  end
end
