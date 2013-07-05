lorem = "ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit"

# Create a project
p = Project.create!(:name => "High Fives All Around")

# Give the project some posts
posts = 3.times do |num|
  p.posts.create!(:content => "est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit (translation: 'Neither is there anyone who loves pain itself since it is pain and thus wants to obtain it'). It is not known exactly when the text acquired its current standard form; it may have been as late as the 1960s. Richard McClintock, a Latin scholar who was the publications director at Hampden-Sydney College in Virginia, discovered the source of the passage sometime before 1982 while searching for citings of the Latin word 'consectetur', rarely used in classical literature.[1][3] The physical source of the Lorem Ipsum text may be the 1914 Loeb Classical Library Edition of the De Finibus, where the Latin text finishes page 34 with 'Neque porro quisquam est qui do-' and begins page 36 with 'lorem ipsum (et seq.)…', suggesting that the galley type of that page was scrambled to make the dummy text seen today. This suggests that 'lorem ipsum' may have been used as dummy text before the Letraset transfer sheets popularized it.")
end

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
