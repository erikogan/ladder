NAMES = YAML.load_file(Rails.root.join('config', 'names.yml'))[Rails.env].with_indifferent_access
