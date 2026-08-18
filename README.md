# workflows

## Install Docker

Docker is required to run the project containers locally.

### 1. Download Docker Desktop

Choose the installation guide for your operating system:

- macOS: https://docs.docker.com/desktop/setup/install/mac-install/
- Windows: https://docs.docker.com/desktop/setup/install/windows-install/
- Linux: https://docs.docker.com/engine/install/

### 2. Install Docker

Follow the official installer instructions for your platform:

- On macOS and Windows, install Docker Desktop and start it after installation.
- On Linux, install the Docker Engine and make sure the Docker service is running.

### 3. Verify the installation

After installation, open a terminal and run:

```bash
docker --version
docker compose version
```

If both commands print version information, Docker is installed correctly.

### 4. Start Docker

Before running any project commands, make sure Docker Desktop is running on macOS or Windows, or that the Docker service is active on Linux.

> If Docker is not running, containers will not start.
