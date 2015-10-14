using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;

namespace MVC6.Controllers
{
    [Route("MVC/[controller]/[action]/{id:int?}")]
    public class HomeController : Controller
    {
        [Route("~/")]
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult GetById(int id)
        {
            return Content("GetById: " + id);
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Error()
        {
            return View("~/Views/Shared/Error.cshtml");
        }

        [Route("~/RouteValue/GetDate/{year}/{month}/{day}")]
        public IActionResult GetDate(string year, string month, string day)
        {
            const string result = @"Route: RouteValue/Index/{year}/{month}/{day}";
            string value = "year:" + year + " month:" + month + " day:" + day;

            return Content(result + "<br/>" + value);
        }
    }
}
