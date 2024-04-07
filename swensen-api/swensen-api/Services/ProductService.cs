using System;
using swensen_api.Entity;
using swensen_api.Models.ProductModel;
using swensen_api.Repositories;

namespace swensen_api.Services
{
    public interface IProductService
    {
        Task<List<ProductResponse>> GetAllProducts();
        Task<ProductResponse> GetProductsById(string Id);
        Task<string> CreateProduct(ProductReq productReq);
        Task<string> Delete(string Id);
        Task<string> UpdateProduct(string Id, ProductReq productReq);
    }
    public class ProductService : IProductService
    {
        private readonly IAsyncRepository<Product> _product;
        private readonly IUnitOfWork _uow;

        public ProductService(IAsyncRepository<Product> product, IUnitOfWork uow)
        {
            _product = product;
            _uow = uow;
        }

        public async Task<string> CreateProduct(ProductReq productReq)
        {
            try
            {
                if (!String.IsNullOrEmpty(productReq.Name) && !String.IsNullOrEmpty(productReq.Category))
                {

                    var x = _product.Query().ToList();
                    _uow.BeginTran();

                    var product = new Product
                    {
                        UID = Guid.NewGuid(),
                        NameProduct = productReq.Name,
                        Category = productReq.Category,
                        IsCancel = "N",
                        CreatedBy = "System",
                        CreatedDate = DateTime.Now,
                        UpdateBy = "System",
                        UpdateDate = DateTime.Now
                    };

                    var res = await _product.AddAsync(product);

                    _uow.Complete();
                    _uow.CommitTran();

                }
                return await Task.FromResult(Constant.RESULT_SECCESS);
            }
            catch (Exception ex)
            {
                _uow.RollBackTran();
                throw ex;
            }
        }

        public async Task<string> Delete(string Id)
        {
            try
            {
                if (!String.IsNullOrEmpty(Id))
                {
                    _uow.BeginTran();

                    var product = _product.Query().FirstOrDefault((f) => f.UID.ToString().Equals(Id));

                    if (product is not null)
                    {
                        product.IsCancel = "Y";

                        _product.Update(product);
                        _uow.Complete();
                        _uow.CommitTran();

                    }
                }

                return await Task.FromResult(Constant.RESULT_SECCESS);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<List<ProductResponse>> GetAllProducts()
        {
            try
            {
                List<ProductResponse> productResponses = new List<ProductResponse>();
                var allProd = _product.Query().Where((w) => w.IsCancel == "N").ToList();

                if (allProd.Any())
                {
                    foreach (var res in allProd)
                    {
                        ProductResponse productResponse = new ProductResponse();
                        productResponse.uid = res.UID.ToString();
                        productResponse.productName = res.NameProduct;
                        productResponse.category = res.Category;

                        productResponses.Add(productResponse);
                    }
                }

                return await Task.FromResult(productResponses);
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }

        public async Task<ProductResponse> GetProductsById(string Id)
        {
            try
            {
                ProductResponse productResponse = new ProductResponse();

                var produc = _product.Query().FirstOrDefault((w) => w.IsCancel == "N" && w.UID.ToString().Equals(Id));

                if (produc is not null)
                {
                    productResponse.uid = produc.UID.ToString();
                    productResponse.productName = produc.NameProduct;
                    productResponse.category = produc.Category;
                }


                return productResponse;
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }

        public async Task<string> UpdateProduct(string Id, ProductReq productReq)
        {
            try
            {
                if (!String.IsNullOrEmpty(Id))
                {
                    _uow.BeginTran();

                    var product = _product.Query().FirstOrDefault((f) => f.UID.ToString().Equals(Id));

                    if (product is not null)
                    {
                        product.NameProduct = productReq.Name;
                        product.Category = productReq.Category;

                        _product.Update(product);

                        _uow.Complete();
                        _uow.CommitTran();

                    }
                }

                return await Task.FromResult(Constant.RESULT_SECCESS);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}

