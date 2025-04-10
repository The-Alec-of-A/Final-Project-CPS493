CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    phone_number VARCHAR(15),
    birthdate DATE,
    iamge TEXT,
    
);

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    category VARCHAR(100) NOT NULL,
    price NUMERIC(10, 2) NOT NULL,
    discount_percentage NUMERIC(5, 2),
    rating NUMERIC(3, 2),
    stock INT,
    brand VARCHAR(100),
    sku VARCHAR(100),
    weight NUMERIC(10, 2),
    dimensions JSONB,
    shipping_information TEXT,
    availability_status VARCHAR(50),
    return_policy TEXT,
    minimum_order_quantity INT,
    meta JSONB,
    images TEXT[],
    thumbnail TEXT,
    width NUMERIC(10, 2),
    height NUMERIC(10, 2),
    depth NUMERIC(10, 2),
    shipping_information TEXT,
    availability_status VARCHAR(50),
    return_policy TEXT,
    minimum_order_quantity INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    barcode VARCHAR(255),
    qr_code VARCHAR(255),
    thumbnail TEXT
);

CREATE TABLE product_reviews (
    id SERIAL PRIMARY KEY,
    product_id INT REFERENCES products(id) ON DELETE CASCADE,
    rating INT NOT NULL CHECK (rating BETWEEN 1 AND 5),
    comment TEXT,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    reviewer_name VARCHAR(255),
    reviewer_email VARCHAR(255)
);

CREATE TABLE product_tags (
    id SERIAL PRIMARY KEY,
    product_id INT REFERENCES products(id) ON DELETE CASCADE,
    tag VARCHAR(50) NOT NULL
);

CREATE TABLE product_images (
    id SERIAL PRIMARY KEY,
    product_id INT REFERENCES products(id) ON DELETE CASCADE,
    image_url TEXT NOT NULL
);

CREATE TABLE order_items (
    id SERIAL PRIMARY KEY,
    order_id INT REFERENCES orders(id) ON DELETE CASCADE,
    product_id INT REFERENCES products(id) ON DELETE CASCADE,
    quantity INT NOT NULL,
    price NUMERIC(10, 2) NOT NULL
);

