import "./Book.scss"
import Button from "../Button"

const URL = "https://www.manning.com/books/vertx-in-action"

const Book = () => (
  <div className="book">
    <hr/>
    <div className="container">
      <div className="book-section">
        <h3>Vert.x 相关书籍</h3>
        <p className="book-subtitle"><em>Vert.x in Action</em>可以教您如何在 Vert.x
        中使用响应式设计模式来构建响应式、弹性、可扩展的
        JVM 应用程序。</p>
        <div className="book-main">
          <div className="book-left">
            <a href={URL} target="_blank" rel="noopener noreferrer">
              <img src={require("../../assets/book-cover.jpg")} width="200" />
            </a>
          </div>
          <div className="book-right">
            <div className="quote">
              <div className="quote-content">
                &ldquo;该书精彩地介绍了 Vert.x，
                面向希望在时间和资源上更有效地开发服务的开发者。&rdquo;
              </div>
              <div className="quote-name">
                Andrew Buttery
              </div>
            </div>
            <div className="quote">
              <div className="quote-content">
                &ldquo;一本很优秀的书，可以加入您的个人书库。
                该书讨论了编写消息传递框架在架构方面的主要挑战。&rdquo;
              </div>
              <div className="quote-name">
                Earl B. Bingham
              </div>
            </div>
            <div className="quote">
              <div className="quote-content">
                &ldquo;该书不仅精彩地介绍了 Vert.x，
                也大体介绍了 Java 的响应式编程。&rdquo;
              </div>
              <div className="quote-name">
                Damian Esteban
              </div>
            </div>
            <a href={URL} target="_blank" rel="noopener noreferrer">
              <Button primary>获取这本书！</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Book
