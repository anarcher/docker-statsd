{
  port: {{ .PORT | default "8125" }},
  mgmt_port: {{ .MGMT_PORT | default "8126" }},

  percentThreshold: [ 50, 75, 90, 95, 98, 99, 99.9, 99.99, 99.999],

  graphitePort: {{ .GRAPHITE_PORT | default "2003" }},
  graphiteHost: "{{ .GRAPHITE_HOST | default "127.0.0.1" }}",
  flushInterval: 10000,

  backends: ['./backends/graphite'],
  graphite: {
    legacyNamespace: false
  }
}
