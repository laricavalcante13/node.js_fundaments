// Middleware para registrar o método, a URL e o horário de cada requisição 
app.use((req, res, next) => {
        const now = new Date().toISOString();
        console.log(`[${now}] Requisição recebida: ${req.method} ${req.url}`);
        next();
});
      
