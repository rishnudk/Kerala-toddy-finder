FROM python:3.12-slim

# Install system dependencies (GDAL/GEOS required for PostGIS)
RUN apt-get update && apt-get install -y --no-install-recommends \
    gdal-bin \
    binutils \
    libproj-dev \
    gcc \
    && rm -rf /var/lib/apt/lists/*

# Install uv (Fast Python package manager)
COPY --from=ghcr.io/astral-sh/uv:latest /uv /uvx /bin/

# Environment variables
ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    UV_SYSTEM_PYTHON=1

WORKDIR /app

# Install dependencies first (to cache the layer)
COPY pyproject.toml uv.lock ./
RUN uv sync --frozen

# Copy the rest of the application code
COPY . .

# Expose port
EXPOSE 8000

# Default command (will be overridden by docker-compose for local dev)
CMD ["uv", "run", "gunicorn", "config.wsgi:application", "--bind", "0.0.0.0:8000", "--workers", "4"]
