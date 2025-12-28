function customRender(reactelement, container) {
  // create DOM element
  const domelement = document.createElement(reactelement.type);

  // add children
  domelement.innerHTML = reactelement.children;

  // add props as attributes
  for (const prop in reactelement.props) {
    domelement.setAttribute(prop, reactelement.props[prop]);
  }

  // append to container
  container.appendChild(domelement);
}

const reactelement = {
  type: 'a',
  props: {
    href: "https://google.com",
    target: "_blank"
  },
  children: "Click me to visit Google"
};

const maincontainer = document.querySelector("#root");
customRender(reactelement, maincontainer);
