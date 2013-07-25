require 'spec_helper'

describe Part do

  let(:part) { FactoryGirl.create(:part) }

  describe "#reset_topic!" do

    it "creates a new version" do
      part.reset_topic!
      part.topics.count.should eq(1)
    end

    context "when the part has comments" do

      let(:topic) { part.topics.first }

      before do
        @old_comment = part.comments.create(:content => "Old topic")
        part.reset_topic!
        @new_comment = part.comments.create(:content => "New topic")
      end

      it "keeps history of all comments" do
        part.comments.count.should eq(2)
      end

      it "keeps track of topical comments" do
        topical_comments = part.topical_comments
        topical_comments.count.should eq(1)
        topical_comments.should include(@new_comment)
      end

    end
  end
end
