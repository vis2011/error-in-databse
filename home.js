class homePage {
  constructor() {
    this.loginButton = createButton("login")
    this.signUpButton = createButton("sign up")
    this.title = createElement("h2")
    this.welcomeText = createElement("h2")
    this.loginText = createElement("h2")
    this.signUpText = createElement("h2")
  }

  setPosition() {
    this.title.position(width / 2 - 420, height / 2 - 350);
    this.welcomeText.position(width / 2 - 405, height / 2 - 280, 50);
    this.loginText.position(width / 2 - 125, height / 2 - 150)
    this.signUpText.position(width / 2 - 130, height / 2)
    this.loginButton.position(width / 2 - 50, height / 2 - 50);
    this.signUpButton.position(width / 2 - 55, height / 2 + 100);
  }
  setElementsStyle() {
    this.title.class("greeting3");
    this.welcomeText.class("greeting4")
    this.loginText.class("greeting5")
    this.signUpText.class("greeting5")
    this.loginButton.class("customButton");
    this.signUpButton.class("customButton");
  }

  hide() {
    this.title.hide();
    this.welcomeText.hide();
    this.loginText.hide();
    this.signUpText.hide();
    this.loginButton.hide();
    this.signUpButton.hide();
  }

  display() {
    var titleText = `School vaccination information center`
    this.title.html(titleText);

    var welcomePart = ` WELCOME! <br>
      everyone   to   the   school   vaccination   information   center  `
    this.welcomeText.html(welcomePart)

    var loginPart = `if you already signed up ,<br>
    click here`
    this.loginText.html(loginPart)

    var signUpPart = `if you did not signed up ,<br>
     click here`
    this.signUpText.html(signUpPart)

    this.signUpButton.mousePressed(() => {
   
      var timerInterval
      Swal.fire({
      title: 'Steps to get the vaccine',
      icon : 'info',
      text: 'So , First you should give the details clearly or else you wont get vaccine ',
      timer: 10000,
      timerProgressBar: true,
      didOpen: () => {
      Swal.showLoading()
      //const b = Swal.getHtmlContainer().querySelector('b')
      timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
      }, 100)
      },
      willClose: () => {
      clearInterval(timerInterval)
      Swal.fire({
        title : 'Steps to get the vaccine' ,
        icon : 'info' ,
        timer : 10000 , 
        text : 'So , First you should give the details clearly or else you wont get vaccine ' ,
        });
    }
    }).then((result) => {
  /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
  }
})
      gameState = 2;
      this.title.hide();
      this.welcomeText.hide();
      this.loginText.hide();
      this.signUpText.hide();
      this.loginButton.hide();
      this.signUpButton.hide();
      form = new Form();
      form.display();
      school = new School();
      schoolCount = school.getCount();
    })



    this.setPosition();
    this.setElementsStyle();
  }
}