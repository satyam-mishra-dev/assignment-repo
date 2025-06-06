-- Create destinations table
CREATE TABLE IF NOT EXISTS destinations (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    state TEXT NOT NULL,
    image TEXT NOT NULL,
    price INTEGER NOT NULL,
    rating DECIMAL(3,1) NOT NULL,
    description TEXT NOT NULL
);

-- Create packages table
CREATE TABLE IF NOT EXISTS packages (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    image TEXT NOT NULL,
    duration TEXT NOT NULL,
    group_size TEXT NOT NULL,
    price INTEGER NOT NULL,
    rating DECIMAL(3,1) NOT NULL,
    reviews INTEGER NOT NULL,
    includes TEXT[] NOT NULL
);
