console.log('function');
/**
 * # Render Markup for all array with Object
 * @param {Array} arrayObject 
 * @returns markupEl
 */
function renderMarkup(arrayObject) {
  let markupEl = ''
    for (let i = 0; i < arrayObject.length; i++) {
      const member = arrayObject[i];
      const { name, role, email, img } = member
      const markup = `
      <div class="card text-white border-0 rounded-0" style="max-width: 540px;">
        <div class="row p-4 text-center">
          <div class="col-md-4 bg-black p-0 m-0">
              <img src="./assets/${img}" class="img-fluid rounded-0" alt="...">
          </div>
          <div class="col-md-8 bg-black">
              <div class="card-body ">
                  <h5 class="card-name">${name}</h5>
                  <p class="card-text">${role}</p>
                  <p class="card-text"><small class="text-primary">${email}</small></p>
              </div>
          </div>
        </div>
      </div>
      `
      markupEl += markup
    }
  return markupEl
}