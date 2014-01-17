module Ladder
  class Application
    def self.config_for(name, extension='yml')
      filename                  = "#{name}#{extension.nil? ? '' : '.' + extension}"
      @configs                  ||= { }
      @configs[filename.to_sym] ||= begin
        config = YAML.load(ERB.new(Rails.root.join("config", filename).read).result(binding))
        config = config[Rails.env] if config.has_key?(Rails.env)
        config.with_indifferent_access
      end
    end
  end
end
