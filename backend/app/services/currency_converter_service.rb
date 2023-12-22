require 'open_exchange_rates'
class CurrencyConverterService
  attr_reader :base_currency

  CACHE_EXPIRY = 1.day

  def initialize(base_currency)
    @base_currency = validate_base_currency(base_currency)
    @api_client    = api_client
  end

  def get_rate(target_currency)
    Rails.cache.fetch("rate_#{base_currency}_#{target_currency}", expires_in: CACHE_EXPIRY) do
      puts "$$$ Getting the exchange rate for rate_#{base_currency}_#{target_currency} $$$"
      begin
        @api_client.exchange_rate(from: base_currency, to: target_currency)
      rescue StandardError => e
        puts "ERROR: Could not retrieve currency conversion data from Open Exchange Rates API: #{e}"
        return nil
      end
    end
  end

  def convert(amount, target_currency)
    rate = get_rate(target_currency)
    (amount * rate).round(2)  if rate# Adjust decimal precision as needed
  end

  def api_client
    OpenExchangeRates::Rates.new
  end

  def validate_base_currency(base_currency)
    if base_currency.present?
      base_currency
    else
      raise ArgumentError, "ERROR: base_currency cannot be nil"
    end
  end
end
