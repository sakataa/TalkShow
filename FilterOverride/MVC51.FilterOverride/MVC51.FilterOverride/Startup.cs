using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(MVC51.FilterOverride.Startup))]
namespace MVC51.FilterOverride
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
