const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)

const data = {
    run: ["01-01", "01-02", "01-06","01-07","01-08"],
    pills: ["01-03"],
    journal: ["01-04"]
}

nlwSetup.setData(data)
nlwSetup.load()