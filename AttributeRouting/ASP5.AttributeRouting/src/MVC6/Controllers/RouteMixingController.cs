using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace MVC6.Controllers
{
    public class RouteMixingController : Controller
    {
        [HttpGet("asp5/Mixing/Default/{id:int=99}")]
        public IActionResult Index(int id)
        {
            ViewBag.Message = "[HttpGet('asp5 / Mixing / Default')]" + id;
            return View();
        }

        [HttpPost("asp5/Mixing/Default")]
        public IActionResult PostIndex(int id)
        {
            return Content("[HttpPost('asp5 / Mixing / Default')]" + id);
        }
    }
}
