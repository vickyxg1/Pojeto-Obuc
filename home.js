var id_element = 0;
// FEATURE: ADD ELEMENT
function addElement() {
  var completelist = document.getElementById("thelist").firstElementChild;
  var requireElement = document.getElementById("obrigatorio");
  var newLine = newLineTable();
  if (newLine != null) {
    completelist.innerHTML += newLineTable();
    if (requireElement != null) {
      requireElement.parentNode.removeChild(requireElement);
    }
  } else {
    addWarningRequiredElement()
  }
}

function addWarningRequiredElement() {
  if (document.getElementById("obrigatorio") == null) {
    var infoContent = document.getElementById("info-content");
    infoContent.innerHTML += "<span id=\"obrigatorio\"> Os campos com * são obrigatórios </span>"
  }
}

function newLineTable() {
  var count =
    element = null
  select = document.getElementById('build');
  build = select.options[select.selectedIndex].text;

  local_work = document.getElementById('local').value;

  if (build != "" && local_work != "") {
    new_element =
      "<tr class=\"tr-table\" id=\"" + id_element + "\">" +
      "<td>" + build + "</td>" +
      "<td>" + local_work + "</td>" +
      "<td class=\"td-icon\">" +
      "<div class=\"table-buttons\">" +
      "<button onclick=\"updateElement(" + id_element + ");\">" +
      "<img class=\"table-icon\" src=\"assets/icons/edit.svg\" alt=\"pen\"/>" +
      "</button>" +
      "<button onclick=\"removeElement(" + id_element + ");\">" +
      "<img class=\"table-icon\" src=\"assets/icons/delete.svg\" alt=\"trash\"/>" +
      "</button>" +
      "</div>" +
      "</td>" +
      "</tr>"

    id_element++;
  }

  return new_element
}


// FEATURE: DELETE ELEMENT
function removeElement(id) {
  var elem = document.getElementById(id);
  elem.parentNode.removeChild(elem);
}

// FEATURE: UPDATE
function updateElement(id) {
  var old_build = document.getElementById(id).children[0].innerHTML;
  var old_local = document.getElementById(id).children[1].innerHTML;


  var elem = document.getElementById(id);
  updating_element =
    "<tr class=\"tr-table\" id=\"" + id + "\">" +
    "<td>" +
    "<select name=\"build\" id=\"update-build\">" +
    "<option value=\"build-null\"></option>" +
    "<option value=\"build-1\">Predio 1</option>" +
    "<option value=\"build-2\">Predio 2</option>" +
    "<option value=\"build-3\">Predio 3</option>" +
    "<option value=\"build-4\">Predio 4</option>" +
    "<option value=\"build-5\">Predio 5</option>" +
    "</select>" +
    "</td>" +
    "<td>" +
    "<input type=\"text\" id=\"update-local\" name=\"local\">" +
    "</td>" +
    "<td class=\"td-icon\">" +
    "<div class=\"table-buttons\">" +
    "<button onclick=\"saveElement(" + id + ");\">" +
    "<img class=\"table-icon\" src=\"assets/icons/done.svg\" alt=\"pen\"/>" +
    "</button>" +
    "<button onclick=\"cancelElement(" + id + ",'" + old_build + "','" + old_local + "');\">" +
    "<img class=\"table-icon\" src=\"assets/icons/cancel.svg\" alt=\"trash\"/>" +
    "</button>" +
    "</div>" +
    "</td>" +
    "</tr>"

  elem.innerHTML = updating_element
}

function saveElement(id) {
  var elem = document.getElementById(id);
  select = document.getElementById('update-build');
  build = select.options[select.selectedIndex].text;

  local_work = document.getElementById('update-local').value;

  updated_element =
    "<tr class=\"tr-table\" id=\"" + id + "\">" +
    "<td>" + build + "</td>" +
    "<td>" + local_work + "</td>" +
    "<td class=\"td-icon\">" +
    "<div class=\"table-buttons\">" +
    "<button onclick=\"updateElement(" + id + ");\">" +
    "<img class=\"table-icon\" src=\"assets/icons/edit.svg\" alt=\"pen\"/>" +
    "</button>" +
    "<button onclick=\"removeElement(" + id + ");\">" +
    "<img class=\"table-icon\" src=\"assets/icons/delete.svg\" alt=\"trash\"/>" +
    "</button>" +
    "</div>" +
    "</td>" +
    "</tr>"

  elem.innerHTML = updated_element
}

function cancelElement(id, old_build, old_local) {
  var elem = document.getElementById(id);

  updated_element =
    "<tr class=\"tr-table\" id=\"" + id + "\">" +
    "<td>" + old_build + "</td>" +
    "<td>" + old_local + "</td>" +
    "<td class=\"td-icon\">" +
    "<div class=\"table-buttons\">" +
    "<button onclick=\"updateElement(" + id + ");\">" +
    "<img class=\"table-icon\" src=\"assets/icons/edit.svg\" alt=\"pen\"/>" +
    "</button>" +
    "<button onclick=\"removeElement(" + id + ");\">" +
    "<img class=\"table-icon\" src=\"assets/icons/delete.svg\" alt=\"trash\"/>" +
    "</button>" +
    "</div>" +
    "</td>" +
    "</tr>"

  elem.innerHTML = updated_element
}