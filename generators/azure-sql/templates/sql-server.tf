resource "azurerm_sql_server" "<%= name %>" {
  count                        = length(var.SQL_LOCATIONS)
  name                         = "${var.SQL_NAME_PREFIX}-${var.SQL_LOCATIONS[count.index]}-${terraform.workspace}-${local.uid}"
  resource_group_name          = var.RESOURCE_GROUP_NAME
  location                     = var.SQL_LOCATIONS[count.index]
  version                      = var.SQL_VERSION
  administrator_login          = var.SQL_ADMIN_LOGIN
  administrator_login_password = var.SQL_ADMIN_PASSWORD

  lifecycle {
    ignore_changes = [administrator_login_password]
  }
  tags = {
  }
}
