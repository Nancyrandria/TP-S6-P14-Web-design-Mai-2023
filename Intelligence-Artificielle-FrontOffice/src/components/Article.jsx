const Article = ({ imgUrl, titre, description, application }) => (
    <div>
        <div className="container_article overflow-hidden">
            <div className="article-image">
                <img src={imgUrl} alt="blog_image" />
            </div>
            <div className="article-content">
                <div>
                    <h1>{titre}</h1>
                    <p>{description}</p>
                </div>
                <p>{application}</p>
            </div>
        </div>
    </div>
);

export default Article;
