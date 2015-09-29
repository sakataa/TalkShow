using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVC5.AttributeRouting.Controllers.Member
{
    //[RouteArea("Member", AreaPrefix = "Normal")]
    [RouteArea("Normal")]
    [Route("Home/{action}")]
    public class HomeController : Controller
    {
        private const string RoutePattern = "Pattern: Member/Home/{action}";

        public ActionResult Index()
        {
            const string action = "Current Route: Member/Home/Index";

            return Content(RoutePattern + "<br/>" + action);
        }
    }
}