import React, { Component } from "react";

class Portfolio extends Component {
  render() {
    if (this.props.data) {
      var projects = this.props.data.projects.map(function (projects) {
        var projectImage = "images/portfolio/" + projects.image;
        return (
          <section key={projects.title} className="cards">
            <article class="card card--1">
              <div class="card__info-hover"></div>
              <div
                class="card__img"
                style={{ backgroundImage: `url(${projectImage})` }}
              ></div>
              <a href={projects.url} class="card_link">
                <div
                  class="card__img--hover"
                  style={{ backgroundImage: `url(${projectImage})` }}
                ></div>
              </a>
              <div class="card__info">
                <span class="card__category"> {projects.title}</span>
                <h3 class="card__title">{projects.category}</h3>
                <span class="card__by">
                  Technologies used:{" "}
                  <a href="#" class="card__author" title="author">
                    {projects.desc}
                  </a>
                </span>
              </div>

              {/* 
            <div className="item-wrap">
              <a href={projects.url} title={projects.title}>
                <img alt={projects.title} src={projectImage} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>{projects.title}</h5>
                    <p>{projects.category}</p>
                  </div>
                </div>
                <div className="link-icon">
                  <i className="fa fa-link"></i>
                </div>
              </a>
            </div> */}
            </article>
          </section>
        );
      });
    }

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>

            {/* <section class="cards">
              <article class="card card--1">
                <div class="card__info-hover"></div>
                <div class="card__img"></div>
                <a href="#" class="card_link">
                  <div class="card__img--hover"></div>
                </a>
                <div class="card__info">
                  <span class="card__category"> Recipe</span>
                  <h3 class="card__title">Crisp Spanish tortilla Matzo brei</h3>
                  <span class="card__by">
                    by{" "}
                    <a href="#" class="card__author" title="author">
                      Celeste Mills
                    </a>
                  </span>
                </div>
              </article>

              <article class="card card--1">
                <div class="card__info-hover"></div>
                <div class="card__img"></div>
                <a href="#" class="card_link">
                  <div class="card__img--hover"></div>
                </a>
                <div class="card__info">
                  <span class="card__category"> Recipe</span>
                  <h3 class="card__title">Crisp Spanish tortilla Matzo brei</h3>
                  <span class="card__by">
                    by{" "}
                    <a href="#" class="card__author" title="author">
                      Celeste Mills
                    </a>
                  </span>
                </div>
              </article>
            </section> */}

            <div className="wrapper">{projects}</div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
