require 'spec_helper'

describe Part do

  let(:part) { FactoryGirl.create(:part) }

  describe "#versioning_update!" do

    it "creates a new part version" do
      old_content = part.content
      message     = "Making some changes"

      part.versioning_update!(message, :content => "new #{old_content}")
      part.versions.count.should eq(1)

      version = part.versions.first
      version.message.should eq(message)
      version.content.should eq(old_content)
    end

    context "when the part has comments" do

      before do
        part.comments.create(:content => "Oh hai")
      end

      it "keeps track of topical comments"
      it "keeps history of all comments"

    end
  end
end
