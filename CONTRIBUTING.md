# Contributing to Kerala Toddy Finder

Thank you for your interest in contributing to the Kerala Toddy Finder project! We welcome contributions from everyone. Below are guidelines to help you get started.

## Requirements
- **Python** 3.12 or higher (`requires-python` in `toddy_shop_backend/pyproject.toml`)
- **Django** 6.0 or higher (declared in `pyproject.toml`; `requirements.txt` pins exact versions)
- **Node.js** 20.9 or higher (Next.js 16 engine requirement)
- **npm** 9 or higher recommended (typical for current Node 20+ installs)

## Setup Instructions
### Django Backend
1. Clone the repository:
   ```bash
   git clone https://github.com/KERALACODERSCAFE/Kerala-toddy-finder.git
   cd Kerala-toddy-finder/toddy_shop_backend
   ```

2. Install UV:
   Install uv based on your platform by following the instructions here: https://docs.astral.sh/uv/getting-started/installation

3. Create a virtual environment:
   ```bash
   uv venv
   ```

4. Activate the virtual environment:
   ```bash
   source .venv/bin/activate  # macOS/Linux

   # On Windows use `.venv\Scripts\activate`
   ```

5. Install dependencies:
   ```bash
   uv sync
   ```

6. Run the development server:
   ```bash
   uv run python manage.py runserver
   ```

### Node.js Frontend
1. Navigate to the frontend directory:
   ```bash
   cd toddy_shop_frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

   For a production build locally, run `npm run build` then `npm start` (`next start`).

## Code Standards
- **Python**: Follow [PEP 8](https://www.python.org/dev/peps/pep-0008/). We use `flake8` for linting and `pre-commit` hooks to ensure standards are met before committing.
- **JavaScript/TypeScript**: Use [Prettier](https://prettier.io/) for code formatting.

## Dependency Management & Dependabot
To ensure our dependencies remain secure and up to date, this project utilizes **Dependabot**.
- **Automated Updates**: Dependabot runs weekly to check for updates in `github-actions`, `toddy_shop_backend` (Python/uv), and `toddy_shop_frontend` (Node/npm).
- **Grouped Pull Requests**: To minimize PR noise, Dependabot is configured to group updates by ecosystem (e.g., all frontend dependencies will be bundled into a single PR).
- **Review Process**: When reviewing Dependabot PRs, please ensure that CI checks pass and there are no breaking changes before merging.

## Pull Request Process
1. Fork the repository.
2. Create a new feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Create a pull request to the main repository.

## Code of Conduct
Please adhere to our [Code of Conduct](https://github.com/KERALACODERSCAFE/Kerala-toddy-finder/blob/main/CODE_OF_CONDUCT.md) in all interactions. Treat everyone with respect and contribute to a positive community.

---

We look forward to your contributions!