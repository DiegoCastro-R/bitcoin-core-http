# Bitcoin Core - HTTP Client

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Description

This is an API that interacts with a Bitcoin Core node using RPC calls. It provides functionalities to make RPC requests and retrieve information from the Bitcoin Core node.

## Features

- Make HTTP requests to a Bitcoin Core node
- Retrieve information from the Bitcoin Core node

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/diegocastro-r/your-repo.git
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Set up the environment variables:

   - Rename the `.env.example` file to `.env`.
   - Fill in the required environment variables in the `.env` file.

4. Start the API server:

   ```bash
   npm start
   ```

5. The API will be accessible at the URL provided in the ENV variable.

   Example:

   ```plaintext
   http://localhost:3000
   ```

## Environment Variables

The following environment variables need to be set in the `.env` file:

- `RPC_HOST`: The URL of the Bitcoin Core node's RPC endpoint.
- `RPC_USERNAME`: The RPC username for authentication.
- `RPC_PASSWORD`: The RPC password for authentication.

## API Endpoints

### `GET /blockchain/getblockchaininfo`

Retrieve various information about the blockchain

#### Response

- Status Code: 200
- Body: JSON object containing the block information.

#### Example

Request:

```bash
GET /blockchain/getblockchaininfo
```

Response:

```json
{
  "response": {
    "chain": "main",
    "blocks": 793665,
    "headers": 793665,
    "bestblockhash": "00000000000000000002808f8e3fa499938ee63ae888c41b7634e8af8c74ab77",
    "difficulty": 51234338863442.89,
    "time": 1686370291,
    "mediantime": 1686367364,
    "verificationprogress": 0.9999969920007765,
    "initialblockdownload": false,
    "chainwork": "00000000000000000000000000000000000000004b339e3d91840d5bdc237e54",
    "size_on_disk": 552946759580,
    "pruned": false,
    "warnings": ""
  }
}
```

## Testing

To run the tests, use the following command:

```bash
npm test
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Contributing

Contributions are welcome! Please refer to the [CONTRIBUTING.md](CONTRIBUTING.md) file for guidelines.

## Support

If you have any questions or need assistance, please open an issue in the [issue tracker](https://github.com/your-username/your-repo/issues).

## Acknowledgments

- Mention any acknowledgments or resources that you found helpful during development.

## Contact

- [Diego C. Rodrigues](https://github.com/diegocastro-r)
- Email: diegocrodrigues.dev@gmail.com
- GitHub: [DiegoCastro-R](https://github.com/diegocastro-r)

Feel free to reach out if you have any questions or feedback.

---
