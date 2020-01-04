output "client_certificate" {
  value = "${module.kubernetes.client_certificate}"
  description = "AKS Client certificate"
  sensitive = true
}

output "kube_config" {
  value = "${module.kubernetes.kube_config_raw}"
  description = "AKS Configuration file"
  sensitive = true
}