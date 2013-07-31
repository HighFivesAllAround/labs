require 'spec_helper'

describe Part do

  let(:part) { FactoryGirl.create(:part) }

  describe "#cut_version!" do

    it "creates a new version" do
      part.cut_version!
      part.versions.count.should eq(1)
    end

    context "when the part has comments" do

      before do
        @old_comment = part.comments.create(:content => "lol")
        part.cut_version!
        part.comments.create(:content => "New engaging topic")
      end

      it "keeps history of all comments" do
        part.comments.count.should eq(2)
      end

      it "keeps track of topical comments" do
        version = part.versions.first
        version_comments = version.comments
        version_comments.count.should eq(1)
        version_comments.should include(@old_comment)
      end

    end
  end
end
