using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVC5.AttributeRouting.Examples
{
    [RoutePrefix("OptionalUriParameter")]
    [Route("{action}/{id?}")]
    public class OptionalUriParameterController : Controller
    {
        public ActionResult Index()
        {
            return Content("OptionalUriParameter/Index/");
        }
        public ActionResult Detail(int id)
        {
            return Content("OptionalUriParameter/Index/id");
        }
	}
}