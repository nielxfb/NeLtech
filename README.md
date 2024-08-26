# NeLtech

This repository contains a full-stack application with a React front-end and a Laravel back-end. Follow the instructions below to set up and run both the front-end and back-end applications.

## Getting Started

### 1. Clone the Repository

First, clone the repository to your local machine:

```sh
git clone https://github.com/nielxfb/NeLtech.git
cd NeLtech
```

### 2. Set Up the Back-End (Laravel)

Navigate to the `back-end` directory:

```sh
cd back-end
```

#### 2.1 Install PHP Dependencies

Ensure you have Composer installed. If not, you can download it from [getcomposer.org](https://getcomposer.org/). Then, install the PHP dependencies:

```sh
composer install
```

#### 2.2 Configure Environment Variables

Copy the `.env.example` file to a new file named `.env`:

```sh
cp .env.example .env
```

Open the `.env` file and fill in the necessary values for your environment (e.g., database credentials, application keys).

#### 2.3 Generate Application Key

Generate a new application key:

```sh
php artisan key:generate
```

#### 2.4 Run the Laravel Application

Start the Laravel development server:

```sh
php artisan serve
```

By default, the Laravel app will be available at `http://localhost:8000`.

### 3. Set Up the Front-End (React)

Open a new terminal window or tab and navigate to the `front-end` directory:

```sh
cd ../front-end
```

#### 3.1 Install Node.js Dependencies

Ensure you have Node.js and npm installed. If not, you can download them from [nodejs.org](https://nodejs.org/). Then, install the Node.js dependencies:

```sh
npm install
```

#### 3.2 Configure Environment Variables

Copy the `.env.example` file to a new file named `.env`:

```sh
cp .env.example .env
```

Open the `.env` file and fill in the necessary values for your environment (e.g., API url).

#### 3.3 Run the React Application

Start the React development server:

```sh
npm run dev
```

By default, the React app will be available at `http://localhost:5173`.

## Summary

- **Back-End (Laravel)**
  - Navigate to `back-end`
  - Run `composer install`
  - Copy `.env.example` to `.env` and configure it
  - Run `php artisan key:generate`
  - Start the server with `php artisan serve`
  
- **Front-End (React)**
  - Navigate to `front-end`
  - Run `npm install`
  - Copy `.env.example` to `.env` and configure it
  - Start the development server with `npm run dev`

---

Feel free to adjust the repository URL, directory names, and additional instructions based on your specific project setup.
