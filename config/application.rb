require File.expand_path('../boot', __FILE__)
require 'rails/all'

Bundler.require(*Rails.groups)

module Piano
  class Application < Rails::Application
    config.active_record.raise_in_transactional_callbacks = true
    config.assets.initialize_on_precompile = false
    config.react.addons = true 
  end
end
