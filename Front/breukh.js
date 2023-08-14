const accordion = document.querySelector(".accordion");
const div=document.querySelector('.accordion')




fetch("http://127.0.0.1:8000/breukh-api/niveau?join=classes")
  .then((response) => response.json())
  .then((data) => {
    data.data.forEach((Element) => {
        div.appendChild(creatElement(Element))
        console.log(Element);
    });
  });

function creatElement(niv) {
  let accordionItem = document.createElement("div");

  accordionItem.setAttribute("class", "accordion-item");
  let accordionHeader = document.createElement("h2");
  accordionHeader.setAttribute("class", "accordion-header");
  accordionHeader.setAttribute("id", "heading"+niv.id_niveau);
  let accordionButton = document.createElement("button");
//   accordionButton = document.createElement('button');
  accordionButton.setAttribute("class", "accordion-button");
  accordionButton.setAttribute("type", "button");
  accordionButton.setAttribute("data-bs-toggle", "collapse");
  accordionButton.setAttribute("data-bs-target", "#collapse"+niv.id_niveau);
  accordionButton.setAttribute("aria-expanded", "true");
  accordionButton.setAttribute("aria-controls", "collapse"+niv.id_niveau);
  accordionButton.innerText = niv.libelle;
  let accordionCollapse = document.createElement("div");
  accordionCollapse.setAttribute("id", "collapse"+niv.id_niveau);
  accordionCollapse.setAttribute("class", "accordion-collapse collapse show");
  accordionCollapse.setAttribute("aria-labelledby", "heading"+niv.id_niveau);
  accordionCollapse.setAttribute("data-bs-parent", "#accordionExample");
  let accordionBody = document.createElement("div");
  accordionBody.setAttribute("class", "accordion-body");

  accordionItem.appendChild(accordionHeader)
  accordionHeader.appendChild(accordionButton)
  accordionItem.appendChild(accordionCollapse)
  accordionCollapse.appendChild(accordionBody)

  niv.classes.forEach((element) => {
    let div = document.createElement("div");
    div.innerText=element.nom
    accordionBody.appendChild(div)
  });

  return accordionItem;
}


