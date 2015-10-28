using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVC5.AttributeRouting.Examples
{
    [Route("{controller}/{action}/{id?}")]
    public class DynamicController : Controller
    {
        // GET: Dynamic
        public ActionResult Index()
        {
            return Content("Dynamic/Index");
        }
        public ActionResult Detail(int id)
        {
            return Content("Dynamic/Detail/id = " + id);
        }
    }
}