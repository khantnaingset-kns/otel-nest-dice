/*instrumentation.ts*/
import * as opentelemetry from '@opentelemetry/sdk-node';
import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';
// import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-proto';
// import { OTLPMetricExporter } from '@opentelemetry/exporter-metrics-otlp-proto';
// import { PeriodicExportingMetricReader } from '@opentelemetry/sdk-metrics';
import { PrometheusExporter } from '@opentelemetry/exporter-prometheus';

export const sdk = new opentelemetry.NodeSDK({
  //   traceExporter: new OTLPTraceExporter({
  //     // optional - default url is http://localhost:4318/v1/traces
  //     url: `${process.env.OTEL_COLLECTOR_URL}/v1/traces`,
  //     // optional - collection of custom headers to be sent with each request, empty by default
  //     headers: {},
  //   }),
  metricReader: new PrometheusExporter({
    port: 9464,
  }),
  instrumentations: [getNodeAutoInstrumentations()],
});
