import promMid from 'express-prometheus-middleware'
import express from 'express';

const app = express();

app.use(promMid({
  metricsPath: '/metrics',
  collectDefaultMetrics: true,
}));

app.get('/users/:id', async (req, res) => {
  if (req.params.id == "fail") {
    res.status(500).json({ message: "error" })
  } else {
    res.json({ id: req.params.id, name: "test" })
  }
});

// Run the server
app.listen(9200, '0.0.0.0', () => console.log('App started!'));
