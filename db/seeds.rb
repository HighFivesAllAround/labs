lorem = "ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit"

# Create a project
p = Project.create!(:name => "High Fives All Around")

# Give the project some parts
parts = 3.times.map do |num|
  p.parts.create!(:title => "Verse #{num + 1}", :content => lorem)
end

parts.each do |part|

  # Comment on part
  part.comments.create!(:content => lorem)

  # Give our part a suggestion
  suggestion = part.suggestions.create!(:content => lorem)

  # Comment on suggestion
  suggestion.comments.create!(:content => lorem)

end
