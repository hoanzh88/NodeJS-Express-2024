module.exports = {
    apps: [{
        name: "my-app",
        mysql: {
            "DB_HOST": "localhost",
            "DB_USER": "root",
            "DB_NAME": "test",
            "DB_PASSWORD": ""
        },
        redis: {
            "REDIS_URL": "redis://localhost:6379"
        },
    }],
};