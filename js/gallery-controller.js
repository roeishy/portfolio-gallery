'use strict'

function init() {
    renderProjs();
}

function renderProjs() {
    const projs = getProjs();
    var strHTMLs = projs.map(proj =>
        `
        <div class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" onclick="renderModal('${proj.id}')" data-toggle="modal" href="#portfolioModal">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src="img/portfolio/${proj.id}.jpg" alt="">
          </a>
          <div class="portfolio-caption">
            <h4>${proj.name}</h4>
            <p class="text-muted">${proj.title}</p>
          </div>
        </div>
        `)
    $('.projs-container').html(strHTMLs.join(''));
}

function renderModal(id) {
    const proj = getProj(id);
    console.log(proj)
    var strHTML = `
    <h2>${proj.name}</h2>
    <p class="item-intro text-muted">${proj.title}</p>
    <img class="img-fluid d-block mx-auto" src="img/portfolio/${proj.id}.jpg" alt="">
    <p>${proj.desc}</p>
    <ul class="list-inline">
    <li>Date: ${proj.publishedAt}</li>
    <li>Category: ${proj.labels}</li>
    <a class="portfolio-link" href="${proj.url}">link</a>
    </ul>
    <button class="btn btn-primary" data-dismiss="modal" type="button">
    <i class="fa fa-times"></i>
    Close Project</button>`;
    $('.modal-body').html(strHTML);
}

