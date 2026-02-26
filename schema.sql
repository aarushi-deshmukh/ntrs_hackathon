--USERS TABLE
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    username VARCHAR(100) UNIQUE NOT NULL,
    password TEXT NOT NULL,
    balance NUMERIC(15,2) NOT NULL CHECK (balance >= 0),
    currency_code VARCHAR(10) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);


--PAYMENTS TABLE
CREATE TABLE payments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    sender_id UUID REFERENCES users(id),
    receiver_id UUID REFERENCES users(id),

    sender_amount NUMERIC(15,2) NOT NULL,
    sender_currency VARCHAR(10) NOT NULL,

    receiver_amount NUMERIC(15,2) NOT NULL,
    receiver_currency VARCHAR(10) NOT NULL,

    exchange_rate NUMERIC(10,5),

    status VARCHAR(20) NOT NULL CHECK (
        status IN ('CREATED','PROCESSING','SUCCESS','FAILED')
    ),

    failure_reason TEXT,

    created_at TIMESTAMP DEFAULT NOW()
);


--PAYMENT LOGS TABLE
CREATE TABLE payment_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    payment_id UUID REFERENCES payments(id),
    old_status VARCHAR(20),
    new_status VARCHAR(20),
    changed_at TIMESTAMP DEFAULT NOW()
);
