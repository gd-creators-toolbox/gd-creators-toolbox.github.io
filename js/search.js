const searchClient = algoliasearch('V5P2F5Q38P', '111c8896dfa95dbce4739445b0cc6759');

const search = instantsearch({
  indexName: 'gd-creators-toolbox',
  searchClient,
  searchFunction(helper) {
    const container = document.querySelector("#hits");
    container.style.display = helper.state.query === '' ? 'none' : '';
    helper.search();
  }
});

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchBar',
    placeholder: '🔎︎ Search',
    poweredBy: true,
    cssClasses: {
      form: "d-flex",
      input: "form-control m-2",
      submit: "d-none",
      reset: "d-none",
    }
  }),

  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: function(hit) {
        return `
          <a class="link-underline-opacity-0 link-light" href="${hit.url}">
              <h5 class="mb-1">${hit.title}</h5>
              <div class="post-snippet">${hit.description || ""}</div>
          </a>
        `;
      }
    },
    cssClasses: {
      list: "list-group",
      item: "list-group-item list-group-item-action"
    }
  })
]);

document.getElementById("searchModal").addEventListener("shown.bs.modal", () => {
  document.getElementsByClassName("ais-SearchBox-input")[0].focus()
})

search.start();