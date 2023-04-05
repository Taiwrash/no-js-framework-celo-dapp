
const contractAddress = "0xd9145CCE52D386f254917e481eB44e9943F39138";
const contractABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_newGreeting",
				"type": "string"
			}
		],
		"name": "setGreeting",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "getGreeting",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

const web3 = new Web3(window.celo);
const contract = new web3.eth.Contract(contractABI, contractAddress);

const greetingForm = document.getElementById("greeting-form");
const greetingInput = document.getElementById("greeting-input");
const result = document.getElementById("result");

greetingForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const newGreeting = greetingInput.value;
  console.log(newGreeting);
  try {
    const accounts = await web3.eth.getAccounts();
    const result = await contract.methods.setGreeting(newGreeting).send({ from: accounts[0] });
    result.innerText = `Greeting set to ${result}!`;
  } catch (error) {
    console.error(error);
    result.innerText = "Error setting greeting.";
  }
});
