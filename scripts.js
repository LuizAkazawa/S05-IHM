function openMenu() {
    document.getElementById("menu_aba").style.display = "block"; 
  }

  function closeMenu() {
    document.getElementById("menu_aba").style.display = "none";    
  }

  function temaInatel() {
      document.documentElement.style.setProperty('--cor-destaque', '#a7a7a7');
      document.documentElement.style.setProperty('--cor-caixas', '#ffffff');
      document.documentElement.style.setProperty('--cor-texto', 'black');
  }

  function temaDark() {
    document.documentElement.style.setProperty('--cor-destaque', '#333333');
    document.documentElement.style.setProperty('--cor-caixas', '#707070');
    document.documentElement.style.setProperty('--cor-texto', 'black');
}