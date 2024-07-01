const isMobile = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

// constant for base path to get complete path images collections
const basePath = "img/dynamic-gallery/";

// special functions for get active letter, side and shade
const getActiveLetter = () => {
  if (document.querySelectorAll(".on-lter-lft").length > 0) {
    return "left.jpg";
  }

  if (document.querySelectorAll(".on-lter-rgt").length > 0) {
    return "right.jpg";
  }
};

const getActiveOnlyLetter = () => {
  if (document.querySelectorAll(".on-lter-lft").length > 0) {
    return "left";
  }

  if (document.querySelectorAll(".on-lter-rgt").length > 0) {
    return "right";
  }
};

// special functions for remove class active to letters
const removeClsActiveLetterLeft = () => {
  const letters = document.querySelectorAll(".one-opt-letp-p.on-lter-lft");

  if (letters.length > 0) {
    letters.forEach((el) => {
      el.classList.remove("on-lter-lft");
      el.classList.add("off-lter-lft");
    });
  }
};

const removeClsActiveLetterRight = () => {
  const letters = document.querySelectorAll(".sec-opt-letp-p.on-lter-rgt");

  if (letters.length > 0) {
    letters.forEach((el) => {
      el.classList.remove("on-lter-rgt");
      el.classList.add("off-lter-rgt");
    });
  }
};

const removeClsSides = () => {
  const sides = document.querySelectorAll(".sq-opt-sd-p");

  if (sides.length > 0) {
    sides.forEach((el) => {
      if (el.hasAttribute("fill")) {
        el.setAttribute("fill", "#FFFFFF");
      }

      if (el.getAttribute("data-side")) {
        el.classList.remove("on-center");
        el.classList.add("off-center");
      }
    });
  }
};

// special function to add class active by letter
const addClsActiveLtr = (reference) => {
  const arrParams = reference.split("-");
  const cls = arrParams[1] === "left" ? "on-lter-lft" : "on-lter-rgt";
  const clsOff = arrParams[1] === "left" ? "off-lter-lft" : "off-lter-rgt";

  document.querySelector(`#${reference}`).classList.remove(clsOff);
  document.querySelector(`#${reference}`).classList.add(cls);
};

const addClsActiveSide = (reference) => {
  const arrParams = reference.split("-");

  if (arrParams[1] === "center") {
    document.querySelector(`#${reference}`).classList.remove("off-side");
    document.querySelector(`#${reference}`).classList.remove("off-center");

    document.querySelector(`#${reference}`).classList.add("on-side");
    document.querySelector(`#${reference}`).classList.add("on-center");
  } else {
    document.querySelector(`#${reference}`).setAttribute("fill", "#707070"); //707070
    //document.querySelector(`#${reference}`).classList.add("on-side");
  }
};

// constants for structure name and path for get name file considering all options posibles
let letterOption = "A";
let shadeOption = "circle";
let insideBlock = 'A';
let sideOption = "left";
let nameFile = getActiveLetter();
let nameCurrentImage = 'left.jpg';

// constants with name to ID for geometics controls right
const square = "#ctrl-square-c,fill";
const triangle = "#ctrl-triangle-c,fill";
const close = "#ctrl-close-c,fill";
const circle = "#ctrl-circle-c,stroke";

// special function for get element using querySelector
const qSelector = (el) => {
  return document.querySelector(el);
};

// special function to change fill to each SVG
const changeFillSvg = (elArr, fill) => {
  const [el, reference] = elArr.split(",");
  qSelector(el).getAttributeNode(reference).value = fill;
};

// special function to chnage name inside block option
const changeInsideBlock = (newLetter) => {
  return `${newLetter}`.toUpperCase();
};

// special function to combine name with both options
const combineNameWithBothOptions = (newOption) => {
  //return `${getActiveOnlyLetter()}${newOption}.jpg`;
  nameCurrentImage = `${newOption}.jpg`;
  return `${newOption}.jpg`;
};

// special function to clean second name in file name
const cleanFileName = () => {
  return getActiveLetter();
};

// special functions for change option and combination each block
const optionLetterOne = document.querySelectorAll(".one-opt-letp-p");

if (optionLetterOne.length > 0) {
  optionLetterOne.forEach((el) => {
    el.addEventListener("click", (e) => {
      removeClsActiveLetterLeft();
      removeClsActiveLetterRight();

      addClsActiveLtr(e.target.id);

      letterOption = e.target.getAttribute("data-ctrl-ltr");
      insideBlock = changeInsideBlock("a");

      /*let name = "";
      if (nameFileSecond.length > 0) {
        name = combineNameWithBothOptions(nameFileSecond);
      } else {
        name = cleanFileName();
      }*/

      generatePath(letterOption, shadeOption, insideBlock, nameCurrentImage);
    });
  });
}

const optionsSide = document.querySelectorAll(".sq-opt-sd-p");

if (optionsSide.length > 0) {
  optionsSide.forEach((el) => {
    el.addEventListener("click", (e) => {
      sideOption = e.target.getAttribute("data-side");

      const dataId = e.target.hasAttribute("data-id")
        ? e.target.getAttribute("data-id")
        : e.target.getAttribute("id");

      removeClsSides();
      addClsActiveSide(dataId);

      //here
      generatePath(
        letterOption,
        shadeOption,
        insideBlock,
        combineNameWithBothOptions(sideOption)
      );
    });
  });
}

const optionLetterSecond = document.querySelectorAll(".sec-opt-letp-p");

if (optionLetterSecond.length > 0) {
  optionLetterSecond.forEach((el) => {
    el.addEventListener("click", (e) => {
      //removeClsActiveLetterLeft();
      removeClsActiveLetterRight();

      addClsActiveLtr(e.target.id);

      const dataEl = e.target.getAttribute("data-ctrl-ltr-sec");
      const arrData = dataEl.split(",");

      insideBlock = changeInsideBlock(arrData[1]);

      generatePath(letterOption, shadeOption, insideBlock, nameCurrentImage);
    });
  });
}

const changeOptionByLetter = (option) => {
  if (letter === option) return;
};

const changeOptionBySide = (option) => {
  if (option === option) return;
};

const changeOptionByShade = (shade) => {
  if (option === shade) return;
};

const clickedCircle = () => {
  changeFillSvg(circle, "#0a0a0a");
  changeFillSvg(close, "#FFFFFF");
  changeFillSvg(triangle, "#FFFFFF");
  changeFillSvg(square, "#FFFFFF");

  shadeOption = "circle";

  generatePath(letterOption, shadeOption, insideBlock, name);
};

const clickedClose = () => {
  changeFillSvg(close, "#0a0a0a");
  changeFillSvg(circle, "#FFFFFF");
  changeFillSvg(triangle, "#FFFFFF");
  changeFillSvg(square, "#FFFFFF");

  shadeOption = "close";

  generatePath(letterOption, shadeOption, insideBlock, name);
};

const clickedTriangle = () => {
  changeFillSvg(triangle, "#0a0a0a");
  changeFillSvg(close, "#FFFFFF");
  changeFillSvg(circle, "#FFFFFF");
  changeFillSvg(square, "#FFFFFF");

  shadeOption = "triangle";

  generatePath(letterOption, shadeOption, insideBlock, name);
};

const clickedSquare = () => {
  changeFillSvg(square, "#0a0a0a");
  changeFillSvg(close, "#FFFFFF");
  changeFillSvg(triangle, "#FFFFFF");
  changeFillSvg(circle, "#FFFFFF");

  shadeOption = "square";

  generatePath(letterOption, shadeOption, insideBlock, name);
};

const generatePath = (letter, shade, block, file) => {
  //const path = `${basePath}${letter}/${shade}/${block}/${side}/${file}`;
  //const path = `${basePath}${letter}/${shade}/${block}/${file}`;
  const path = `${basePath}${shade}/${letter}${block}/${file}`;
  console.log({path});
  const reference = "#dynamic-img-phaino";

  document.querySelector(reference).src = `${path}`;
};

