/* Cree un programa con JavaScript, HTML y CSS que funcione como
 generador de tarjetas de presentación. El programa deberá tener un formulario para
 ingresar los datos necesarios y al enviar, mostrar en pantalla el diseño de la tarjeta
 de presentación con los datos ingresados previamente. El diseño de la tarjeta debe
 contener una imagen (logo), un diseño (layout) y los datos ingresados. Utiliza tu
 creatividad para mostrar la tarjeta de presentación.*/

function generateCard() {
  const name = document.getElementById("name").value;
  const title = document.getElementById("title").value;
  const company = document.getElementById("company").value;
  const logo = document.getElementById("logo").value;
  const email = document.getElementById("email").value;

  // Set card data
  document.getElementById("cardName").textContent = name;
  document.getElementById("cardTitle").textContent = title;
  document.getElementById("cardCompany").textContent = company;
  document.getElementById("cardLogo").src = logo;
  document.getElementById("cardEmail").textContent = email;

  // Show result card
  const resultCard = document.getElementById("resultCard");
  resultCard.style.display = "flex";
  //   document.getElementById("resultCard").style.remove("hidden");
}
