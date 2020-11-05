module Types
  class QueryType < Types::BaseObject
    field :articles, [Types::ArticleType], null: false

    def articles
      Article.all
    end

    field :article, Types::ArticleType, null: false do
      argument :id, Int, required: false
    end

    def article(id:)
      Article.find(id)
    end
  end
end
