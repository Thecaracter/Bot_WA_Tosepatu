const { Controller, Response } = require("pepesan");
const f = require("../utils/Formatter");
const gsheet = require("../service/gsheet");

module.exports = class BotController extends Controller {


  async introduction(request) {
    return Response.menu.fromArrayOfString(
      [
        f("menu.daftarHarga"),
        f("menu.cekCucian")
      ],
      f("intro", [request.name]),
      f("template.menu")
    );
  }

  async daftarHarga(request) {
    return f("daftarHargaTemplate")
  }

  async cekCucian(request) {
    const responseStr = await gsheet.getData(request.number)
    await this.reply(f("header.cekCucian", "\n\n"))
    return this.reply(responseStr)
  }

}