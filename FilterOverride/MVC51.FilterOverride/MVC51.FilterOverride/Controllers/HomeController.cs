using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVC51.FilterOverride.Controllers
{
    [Authorize(Users = "admin")]
    public class HomeController : Controller
    {
        [OverrideAuthorization]
        //[Authorize(Users = "member")]
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}