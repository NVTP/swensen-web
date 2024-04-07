using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using swensen_api.Models;
using swensen_api.Models.ProductModel;
using swensen_api.Services;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace swensen_api.Controllers
{
    [EnableCors]
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductService _productService;

        public ProductController(IProductService productService)
        {
            _productService = productService;
        }

        [HttpGet("All")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(ResponseResult))]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError, Type = typeof(ResponseResult))]
        public IActionResult GetAllProducts()
        {
            try
            {
                var result = _productService.GetAllProducts();


                return Ok(new ResponseResult
                {
                    status = true,
                    statusCode = StatusCodes.Status200OK,
                    message = "Success",
                    data = result,
                });
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new ResponseResult
                {
                    status = true,
                    statusCode = StatusCodes.Status500InternalServerError,
                    message = ex.Message.ToString(),
                    data = null,
                });
            }
        }

        [HttpGet("ById/{Id}")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(ResponseResult))]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError, Type = typeof(ResponseResult))]
        public IActionResult GetProductsById(string Id)
        {
            try
            {
                var result = _productService.GetProductsById(Id);


                return Ok(new ResponseResult
                {
                    status = true,
                    statusCode = StatusCodes.Status200OK,
                    message = "Success",
                    data = result,
                });
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new ResponseResult
                {
                    status = true,
                    statusCode = StatusCodes.Status500InternalServerError,
                    message = ex.Message.ToString(),
                    data = null,
                });
            }
        }

        [HttpPost("CreateProduct")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(ResponseResult))]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError, Type = typeof(ResponseResult))]
        public IActionResult CreateProduct([FromBody]ProductReq productReq)
        {
            try
            {
                var result = _productService.CreateProduct(productReq);

                return Ok(new ResponseResult
                {
                    status = true,
                    statusCode = StatusCodes.Status200OK,
                    message = "Success",
                    data = result,
                });
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new ResponseResult
                {
                    status = true,
                    statusCode = StatusCodes.Status500InternalServerError,
                    message = ex.Message.ToString(),
                    data = null,
                });
            }
        }


        [HttpPost("UpdateProduct/{Id}")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(ResponseResult))]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError, Type = typeof(ResponseResult))]
        public IActionResult UpdateProduct(string Id, [FromBody]ProductReq productReq)
        {
            try
            {
                var result = _productService.UpdateProduct(Id, productReq);

                return Ok(new ResponseResult
                {
                    status = true,
                    statusCode = StatusCodes.Status200OK,
                    message = "Success",
                    data = result,
                });
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new ResponseResult
                {
                    status = true,
                    statusCode = StatusCodes.Status500InternalServerError,
                    message = ex.Message.ToString(),
                    data = null,
                });
            }
        }


        [HttpPost("Delete/{Id}")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(ResponseResult))]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError, Type = typeof(ResponseResult))]
        public IActionResult Delete(string Id)
        {
            try
            {
                var result = _productService.Delete(Id);

                return Ok(new ResponseResult
                {
                    status = true,
                    statusCode = StatusCodes.Status200OK,
                    message = "Success",
                    data = result,
                });
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new ResponseResult
                {
                    status = true,
                    statusCode = StatusCodes.Status500InternalServerError,
                    message = ex.Message.ToString(),
                    data = null,
                });
            }
        }

    }
}

