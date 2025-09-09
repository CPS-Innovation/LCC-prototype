let divisionData = {};
let divisionNames = [];

// Fetch JSON data once the page loads
fetch('divisions.json')   // ✅ adjust path if needed
  .then(res => res.json())
  .then(data => {
    divisionData = data;
    divisionNames = Object.keys(divisionData);

    initAutocomplete();
  })
  .catch(err => console.error("Error loading divisions.json", err));

function initAutocomplete() {
  accessibleAutocomplete.enhanceSelectElement({
    selectElement: document.querySelector('#division'),
    defaultValue: '',
    showAllValues: true,
    source: (query, populateResults) => {
      const results = divisionNames.filter(name =>
        name.toLowerCase().includes(query.toLowerCase())
      );
      populateResults(results);
    },
    onConfirm: (val) => {
      populateFields(val);
    }
  });
}

function populateFields(val) {
  const data = divisionData[val];
  if (!data) return;

  // Populate URN
  document.getElementById("urn-part1").value = data.urn[0];
  document.getElementById("urn-part2").value = data.urn[1];
  document.getElementById("urn-part3").value = data.urn[2];

  // Populate Local Ref
  document.getElementById("local-ref1").value = data.localRef[0];
  document.getElementById("local-ref2").value = data.localRef[1];

  // Populate other fields
  document.getElementById("registering-unit").value = data.registeringUnit;
  document.getElementById("wcu").value = data.witnessCare;
  document.getElementById("crest").value = data.crest;
}